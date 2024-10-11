from mangum import Mangum
from server import app  # Import the main FastAPI app from the same directory

handler = Mangum(app)