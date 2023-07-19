import cv2
import numpy as np


# Define the function to detect lane lines
def detect_lane_lines(image):

    # Convert the image to grayscale
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply Gaussian blur to the image
    blur_image = cv2.GaussianBlur(gray_image, (5, 5), 0)

    # Apply Canny edge detection to the image
    edges = cv2.Canny(blur_image, 50, 150)

    # Find the lines in the image
    lines = cv2.HoughLinesP(edges, rho=1, theta=np.pi / 180, threshold=100, minLineLength=40, maxLineGap=100)

    # Draw the lines on the image
    for line in lines:
        x1, y1, x2, y2 = line[0]
        cv2.line(image, (x1, y1), (x2, y2), (0, 255, 0), 2)

    return image

# Read the image
image = cv2.imread('road.jpg')

# Detect the lane lines in the image
image = detect_lane_lines(image)

# Display the image
cv2.imshow('Image', image)
cv2.waitKey(0)
