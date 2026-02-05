import fitz  # PyMuPDF
import os

# PDF path
pdf_path = r"public\LANES LOGISTICS CORPORATE PRESENTATION-ENG.pdf"
output_dir = r"public\certificates"

# Create output directory
os.makedirs(output_dir, exist_ok=True)

# Open PDF
doc = fitz.open(pdf_path)

print(f"Total pages: {len(doc)}")

# Extract images from each page
image_count = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    image_list = page.get_images(full=True)
    
    print(f"Page {page_num + 1}: {len(image_list)} images found")
    
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        # Save image
        image_filename = f"page{page_num + 1}_img{img_index + 1}.{image_ext}"
        image_path = os.path.join(output_dir, image_filename)
        
        with open(image_path, "wb") as img_file:
            img_file.write(image_bytes)
        
        print(f"  Saved: {image_filename}")
        image_count += 1

doc.close()
print(f"\nTotal images extracted: {image_count}")
print(f"Images saved to: {output_dir}")
