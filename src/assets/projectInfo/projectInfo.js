import redditClientImgLink from '../images/projectImages/redditClientImg.png'
import todoAppImg from '../images/projectImages/todoAppImg.png'
import blogPostAppImg from '../images/projectImages/blog_post_redux_app.png'
import colorPickerAppImg from '../images/projectImages/color_picker_app.png'
export const projectInfo = [
  {
    title: 'Reddit Minimal',
    link: 'https://keeans-reddit-app.netlify.app/',
    img: redditClientImgLink,
    details:
      'This app utilizes redux-toolkit for state management and grabs data from the unofficial Reddit JSON API.  You can view images, comments, filter posts, and visit the homepage as well as the subreddits listed on the sidebar.  Components are built from MaterialUI.  Works on mobile too!',
    github: 'https://github.com/kjoling/my-reddit-app',
  },
  {
    title: 'Color Picker',
    link: 'https://kjoling-color-picker-app.netlify.app/',
    img: colorPickerAppImg,
    details:
      'This application allows you to create your own color palettes, as well as pick from some premade ones.  You can also delete premade color palettes, but will need to clear your local storage in order to access them again. Components are built from MaterialUI.',
    github: 'https://github.com/kjoling/my-color-project-app',
  },
  {
    title: 'Blog Post App',
    link: 'https://kjolingblogpostredux.netlify.app/',
    img: blogPostAppImg,
    details:
      'This application uses Redux Toolkit for state management and grabs data from the free json place holder API.  It supports CRUD opperations, though it is frontend only and does not update a database.  It is based off a tutorial from David Gray on youtube. ',
    github: 'https://github.com/kjoling/blog-post-app',
  },
  {
    title: 'Todo App',
    link: 'https://kjoling-crud-todo-app.netlify.app/',
    img: todoAppImg,
    details:
      'This is a simple todo application that uses localStorage to maintain a todo list.  You can create, read, update and delete todo items, as well as getting the satisfaction of checking them off.  Components are built from MaterialUI.',
    github: 'https://github.com/kjoling/todo-hooks-app',
  },
]
