# Issues
**Needs to be Addressed**
- The button-container positioning in Quotes.html still requires adjustments for better alignment.
- Replace alert messages with in-DOM messages for a smoother user experience.
- Remove Bookmark Addition and display tab from the logged-out client view.

## Updates
- **Dynamic Image Handling for Quotes:** Instead of storing image URLs in Firestore, a random image fetched from the Pixabay API is inserted into the quote wrapper on each page refresh. This change ensures that images are not repeated unnecessarily and keeps the display fresh.
- **Diverse Image Query:** The image-fetching query has been updated to select from a broader range of categories, ensuring more diverse and relevant imagery instead of displaying a single category.


## Resolved Issues
- None