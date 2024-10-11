from mangum import Mangum
from server import app  # Import the main FastAPI app

handler = Mangum(app)