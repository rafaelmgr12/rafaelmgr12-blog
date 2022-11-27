# Rafael's Journal
A blog website to serve as my personal journal, where I will share my notes about my software engineer career. Built with Astro and Tailwind CSS

## Tech

- [Astro](https://astro.build/) - Static Website Framework
- [Tailwind CSS](https://tailwindui.com/) - CSS Framework
- [React](https://reactjs.org/) - Component-based UI framework for JS
- [Headless UI](https://headlessui.com/) - Unstyled interactive components
- [React Icons](https://react-icons.github.io/react-icons/) - Icon set
- [Inkdrop](https://www.inkdrop.app/) - Markdown note-taking app, for writing the blog content (optional)

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
PROJECT_ROOT
├── public              # static assets
│   └── posts           # images of posts
├── src
│   ├── components      # Astro & React components
│   │   └── icons
│   ├── layouts         # page layouts
│   ├── pages           # page files
│   │   ├── categories  # category pages
│   │   └── posts       # .md files
│   └── styles          # global stylesheets
└── tools               # Inkdrop integration
```

## How to import notes from your Inkdrop local server

First, please check out the [live-export](https://github.com/inkdropapp/inkdrop-live-export) documentation.

Create `.env` file as following:

```
DEBUG='inkdrop:export:info,inkdrop:export:error'
INKDROP_USERNAME='***'
INKDROP_PASSWORD='***'
INKDROP_PORT=***
INKDROP_BOOKID='***'
```

Then, run the following command:

```sh
npm run live-import
```

## License

MIT License.

## Reference 
To build this site I use the following repo as reference
* [Takuya Matsuyama](https://github.com/craftzdog/craftzdog-uses)
