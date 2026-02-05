import pypdf
import os

pdf_path = r"C:\Users\onura\OneDrive\Desktop\Antigravity files\Safeline\public\LANES LOGISTICS CORPORATE PRESENTATION-ENG.pdf"
output_path = r"C:\Users\onura\OneDrive\Desktop\Antigravity files\Safeline\public\presentation_content.txt"

def extract_text():
    try:
        reader = pypdf.PdfReader(pdf_path)
        with open(output_path, "w", encoding="utf-8") as f:
            for page in reader.pages:
                f.write(page.extract_text() + "\n" + "="*50 + "\n")
        print(f"Success: Text extracted to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_text()
