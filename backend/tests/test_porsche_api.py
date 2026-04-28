"""Backend API tests for Porsche 911 Showcase."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://porsche-history-hub.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_returns_norwegian_message(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Porsche" in data["message"]


# ---------- Contact POST ----------
class TestContactCreate:
    def test_create_contact_full_payload(self, api_client):
        payload = {
            "name": "TEST_Ola Nordmann",
            "email": "test_ola@example.com",
            "phone": "+4795195590",
            "subject": "GT3 spørsmål",
            "message": "Hei, jeg lurer på 911 GT3.",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        assert "_id" not in data

    def test_create_contact_minimal_payload(self, api_client):
        payload = {
            "name": "TEST_Minimal",
            "email": "test_minimal@example.com",
            "message": "Kort melding.",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["phone"] is None
        assert data["subject"] is None

    def test_create_contact_invalid_email(self, api_client):
        payload = {
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "message": "test",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_name(self, api_client):
        payload = {"email": "test_a@example.com", "message": "missing name"}
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_email(self, api_client):
        payload = {"name": "TEST_NoEmail", "message": "missing email"}
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_message(self, api_client):
        payload = {"name": "TEST_NoMsg", "email": "test_b@example.com"}
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_empty_name(self, api_client):
        payload = {"name": "", "email": "test_c@example.com", "message": "x"}
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_empty_message(self, api_client):
        payload = {"name": "TEST_X", "email": "test_d@example.com", "message": ""}
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422


# ---------- Contact GET (list + persistence + sort + _id excluded) ----------
class TestContactList:
    def test_list_contacts_excludes_mongo_id_and_persists(self, api_client):
        # Create a recognizable message
        payload = {
            "name": "TEST_ListVerify",
            "email": "test_listverify@example.com",
            "message": "Verify persistence and listing",
        }
        cr = api_client.post(f"{API}/contact", json=payload)
        assert cr.status_code == 201
        created_id = cr.json()["id"]

        r = api_client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        # _id must not be present
        for it in items:
            assert "_id" not in it
        # Created item should be present
        ids = [it["id"] for it in items]
        assert created_id in ids

    def test_list_contacts_sorted_desc_by_created_at(self, api_client):
        # Create two messages back-to-back
        p1 = {
            "name": "TEST_Sort1",
            "email": "test_sort1@example.com",
            "message": "first",
        }
        p2 = {
            "name": "TEST_Sort2",
            "email": "test_sort2@example.com",
            "message": "second",
        }
        r1 = api_client.post(f"{API}/contact", json=p1)
        assert r1.status_code == 201
        r2 = api_client.post(f"{API}/contact", json=p2)
        assert r2.status_code == 201
        id1 = r1.json()["id"]
        id2 = r2.json()["id"]

        r = api_client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        # Find positions
        ids = [it["id"] for it in items]
        assert id2 in ids and id1 in ids
        # id2 was created after id1 -> appears earlier (desc order)
        assert ids.index(id2) < ids.index(id1)
