from pypdf import PdfReader
import sys

pdf_path = r'c:\Users\Tessl\Projects\On-EaglewingsGroup\Plan 1 - Multi-Page Public Web Platform Architecture.pdf'
reader = PdfReader(pdf_path)
print(f'Pages: {len(reader.pages)}')
for i, page in enumerate(reader.pages):
    print(f'\n===== Page {i+1} =====')
    text = page.extract_text()
    if text:
        print(text)
    else:
        print('[No text extracted]')