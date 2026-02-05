from pypdf import PdfReader
import os

pdf_path = r"C:\Users\onura\OneDrive\Desktop\Antigravity files\Safeline\public\safeline_secilen_logo.pdf"
output_dir = r"C:\Users\onura\OneDrive\Desktop\Antigravity files\Safeline\public"

pdf = PdfReader(pdf_path)
print(f"Pages: {len(pdf.pages)}")

page = pdf.pages[0]
print(f"Page size: {page.mediabox}")

images = []
for i, image in enumerate(page.images):
    ext = image.name.split(".")[-1] if "." in image.name else "png"
    img_path = os.path.join(output_dir, f"logo_{i}.{ext}")
    with open(img_path, "wb") as f:
        f.write(image.data)
    images.append(img_path)
    print(f"Extracted: {img_path}")

print(f"Total images: {len(images)}")
