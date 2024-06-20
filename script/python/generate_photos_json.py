import os
import json
from PIL import Image
from moviepy.editor import VideoFileClip

def get_image_info(file_path):
    with Image.open(file_path) as img:
        width, height = img.size
    return width, height

def generate_photos_json(directory):
    photos = []
    supported_image_formats = ('.jpg', '.jpeg', '.png')

    files = sorted(os.listdir(directory))  # Sort files by filename

    for filename in files:
        file_path = os.path.join(directory, filename)
        if filename.lower().endswith(supported_image_formats):
            width, height = get_image_info(file_path)
        else:
            continue

        photos.append({
            "key": len(photos) + 1,
            "alt": filename,
            "src": f"/assets/gallery/{filename}",
            "width": width,
            "height": height
        })

    with open('photos.json', 'w') as json_file:
        json.dump(photos, json_file, indent=2)

if __name__ == '__main__':
    directory = '../public/assets/gallery'  # Update this path to your media folder
    generate_photos_json(directory)

