export function generateAuthor(name) {
    if (typeof name !== 'string') {
      return ''; // Return an empty string or handle as needed
    }
  
    const slug = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^\-+/, "")
      .replace(/\-+$/, "");
  
    return slug;
  }
  