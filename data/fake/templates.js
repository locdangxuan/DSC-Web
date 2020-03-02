module.exports = [
  {
    id: 1,
    name: "centered",
    layout: [
      {
        label: "Section 1",
        field: "section-1",
        type: "editor"
      },
      {
        label: "Section 2",
        field: "section-2",
        type: "editor"
      },
      {
        label: "Section 3",
        field: "section-3",
        type: "editor"
      }
    ]
  },
  {
    id: 2,
    name: "full-width",
    layout: [
      {
        label: "Section 1",
        field: "section-1",
        type: "editor"
      },
      {
        label: "Section 2",
        field: "section-2",
        type: "editor"
      },
      {
        label: "Section 3",
        field: "section-3",
        type: "editor"
      }
    ]
  },
  {
    id: 3,
    name: "contact-form",
    layout: [
      // Empty, there's no content in Contact page, just the form
    ]
  },
  {
    id: 4,
    name: "coming-soon",
    layout: [
      {
        label: "Title",
        field: "title",
        type: "text"
      },
      {
        label: "Short message",
        field: "short-message",
        type: "text"
      }
    ]
  },
  {
    id: 5,
    name: "gallery",
    layout: [
      {
        label: "Gallery",
        field: "gallery",
        type: "addable"
      }
    ]
  },
  {
    id: 6,
    name: "left-portrait",
    layout: [
      {
        label: "Image",
        field: "image",
        type: "image"
      },
      {
        label: "Content",
        field: "content",
        type: "editor"
      }
    ]
  }
]
