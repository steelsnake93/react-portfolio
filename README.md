 <h1 align="center">My Portfolio</h1>

This is a portfolio project built using React and React Router. It contains information about the developer, a list of their projects, and a contact page with a contact form.

## Links

- [Repo](https://github.com/steelsnake93/react-portfolio "<react-portfolio> Repo")

- [Live](https://steelsnake93.github.io/react-portfolio  "<[Homepage url]> Live View")

## Screenshots

![Screenshot](/images/screenshot.png "Home Page")

## Components

### App
The top-level component that renders all necessary child components.

### Header
Rendered across every page component of the site and contains a Navbar.

### Home
The welcome landing page that contains the developer's name, headshot or avatar, brand statement, and an indication that it is their portfolio site.

### Projects
Renders six instances of the Project component dynamically by importing data from the JSON file.

### Project
A reusable component that ingests JSON data as props and renders a single instance for each project. Utilizes Router props to properly render the right project based on user selection.

### Contact
Includes contact information such as email address, links to a PDF version of the developer's CV, GitHub profile, LinkedIn page, and a contact form for handling events.

## Technologies Used

- React
- React Router


## Installation

1. Clone this repository.

        git clone https://github.com/your-username/my-portfolio.git

2. Install the dependencies.

        npm install

3.  Start the development server.

        npm start

4. Open http://localhost:3000 in your web browser.

## Contributing

This project is not currently open for contributions, but feel free to fork the repository and make your own version!

## License

This project is licensed under the <a href="https://github.com/steelsnake93/react-portfolio/blob/main/LICENSE">MIT</a> License. See the <a href="https://choosealicense.com/licenses/mit/">LICENSE</a> file for details.