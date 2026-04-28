import logging
import time
from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from prometheus_client import make_asgi_app
from pythonjsonlogger import jsonlogger

# Logger setup
logger = logging.getLogger("scorecard-api")
logHandler = logging.StreamHandler()
formatter = jsonlogger.JsonFormatter()
logHandler.setFormatter(formatter)
logger.addHandler(logHandler)
logger.setLevel(logging.INFO)

app = FastAPI(title="Compliance Scorecard API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Metrics
metrics_app = make_asgi_app()
app.mount("/metrics", metrics_app)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    duration = time.time() - start_time
    logger.info(f"Path: {request.url.path} Duration: {duration:.4f}s Status: {response.status_code}")
    return response

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.get("/scores/summary")
def get_scores_summary():
    return {
        "global_score": 82.5,
        "iso_27001": 88.0,
        "nist_csf": 74.2,
        "pci_dss": 91.5,
        "trend": "+2.4%"
    }

@app.get("/scores/business-units")
def get_bu_scores():
    return [
        {"bu": "Finance", "score": 85.0, "status": "Compliant"},
        {"bu": "Engineering", "score": 68.5, "status": "At Risk"},
        {"bu": "HR", "score": 92.0, "status": "Optimal"}
    ]

@app.get("/findings")
def get_findings():
    return [
        {"id": "F-101", "control": "MFA Enforcement", "bu": "Engineering", "severity": "Critical", "score_impact": -12.5},
        {"id": "F-102", "control": "Data Encryption", "bu": "Finance", "severity": "High", "score_impact": -8.4}
    ]

@app.get("/dashboard/summary")
def get_dashboard_summary():
    return {
        "assessed_resources": 14200,
        "critical_violations": 12,
        "remediation_velocity": "4.2 days",
        "last_assessment": "2026-04-27T18:30:00Z"
    }
