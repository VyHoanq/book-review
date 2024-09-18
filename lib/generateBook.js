export function generateBook(title) {
    if (typeof title !== 'string') {
      return ''; // Return an empty string or handle as needed
    }
  
    const publisher = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^\-+/, "")
      .replace(/\-+$/, "");
  
    return publisher;
  }
  