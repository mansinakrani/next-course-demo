### Exercise: Basic Routing in Next.js

#### Goal:

Create a simple Next.js application with multiple pages and implement basic routing using Next.js's built-in routing system.

#### Instructions:

1. Create a new Next.js project.

2. Create two routes named "about" and "contact".
   - create a folder for each route and add page.js file in each folder.

3. Verify that you can navigate between the "about," and "contact" pages.

### Exercise: Nested Routes in Next.js

#### Goal:

Demonstrate understanding of how to create nested routes in a Next.js application.

#### Instructions:

1. Create a "products" route and inside that same folder create two more folders name "allproducts" & "specificproduct"
2. Inside the "allproducts" folder create a component which will show this text: "(1220) products in the store"
3. Inside the "specificproduct" folder create a component which will show this text: "Here is my one & only product"
4. Test all the routes.

### Exercise: Linking and Navigation in Next.js

#### Goal:

`<Link>` component for client-side navigation in a Next.js application.

#### Instructions:

1. Create two routes "home" and "dashboard"

2. In the "home" page, create a simple landing page with a welcoming message and some content.

3. In the "dashboard" page, create a dashboard with various components, such as a navigation menu, user profile, and other related information.

4. In the "dashboard" page, implement a navigation menu that includes links to the "home" page and other sections within the dashboard.

5. Use Next.js's `<Link>` component to create these navigation links. Ensure that clicking on these links navigates the user to the corresponding pages within the application without a full page refresh.

### Exercise: Using `useRouter` in Next.js

#### Goal:

`useRouter` hook in a Next.js application for programmatic navigation and accessing route information.

#### Instructions:

1. Create two routes: "page1" and "page2".

2. In the "page1" route, create a simple landing page with a message and a button.

3. In the "page2" route, create a second page with information or content.

4. Implement a programmatic navigation from "page1" to "page2" using the `useRouter` hook from Next. When the user clicks a button on "page1," they should be navigated to "page2."

5. Verify that programmatic navigation from "page1" to "page2" works as expected, and that the route information is displayed on "page2."

### Exercise: Route Organization and Ignoring Routes in Next.js

#### Goal:

Organizing routes using folders and excluding certain folders from being treated as routes in a Next.js application.

#### Instructions:

1. Create the "users" folder (but it shouldn't be a route).
2. Inside the "users" folder create a "userinfo" route.
3. Inside the "app" directory create another folder name "auth" but it (shouldn't be a route).
4. Inside the "auth" folder create a login route which will only print (Please Login To See The Content)

#### `If want to ignore specific folder to be as route , just wrap folder name in () [i.e.; (auth)]. The route [auth/login] will not work [/login] will work even though we have placed login & register inside auth folder.`

### Exercise: Dynamic Routes in Next.js

#### Goal:

Understanding and implementing dynamic routes in a Next.js application.

#### Instructions:

1. Create a dynamic route "post/[id]" where "id" is a dynamic parameter.

2. In the "post/[id]" route, create a page that displays the content of the post with the id specified in the route.

3. Use Next.js's `getStaticPaths` and `getStaticProps` to fetch and display the post content dynamically.

4. Verify that navigating to different post ids in the "post/[id]" route displays the corresponding post content.

5. Bonus: Implement a navigation menu that includes links to different post ids. Ensure that clicking on these links navigates the user to the corresponding post content without a full page refresh.


### Exercise: Handling URL Segments in Next.js

#### Goal:

Working with URL segments to create dynamic routes and access data from the URL in a Next.js application.

#### Instructions:

1. Create a route named "products."

2. Inside the "products" folder, create a folder named "[id]" This square bracket notation "[id]" indicates that this route will handle dynamic URL segments.

3. In the "[id]" file, create a page that displays information about a product based on the value of the "id" segment in the URL.

4. Use the Next.js `useRouter` hook to access the "id" segment from the URL.

5. When a user accesses a URL like "/products/123" (where "123" is a dynamic product ID), the page should display information about the product with the corresponding ID.

6. Verify that you can access dynamic product pages with different IDs in the URL, and the page displays information based on the ID from the URL segment.

### Exercise: Creating a Custom "Not Found" Page in Next.js

#### Goal:

Create a custom "Not Found" (404) page in a Next.js application to improve the user experience when accessing non-existing routes.

#### Instructions:

1. In your Next.js project, create a custom error page named "404.js" OR "not-found.js" in the "pages" directory. This page will serve as the custom "Not Found" page for your application.

2. Customize the "404.js" page with a message or content to inform users that the page they are looking for does not exist.

3. Verify that when accessing a non-existing route, users are redirected to the custom "Not Found" page (404.js) and see the message you provided.

### Exercise: Implementing Redirects in Next.js

#### Goal:

Setting up and managing redirects in a Next.js application to enhance user experience and ensure proper page navigation.

#### Instructions:

1. In your Next.js project, create a custom error page named "404.js" in the "app" directory. This page will serve as the custom 404 error page for your application.

2. Implement redirects for the following scenarios:

- Create a redirection rule that redirects users from the route "/old-page" to the new page "/new-page."
- Create a rule that redirects users from a non-existing route "/non-existing" to the custom 404 error page "404.js."

3. Verify that the redirection from "/old-page" to "/new-page" works as expected, and that accessing a non-existing route redirects users to the custom 404 error page.

### Exercise: Creating Basic Layouts in Next.js

#### Goal:

Creating and applying basic layouts in a Next.js application to maintain consistency and structure across multiple pages.

#### Instructions:

1. In your Next.js project, create a new component named "layout.js." This component will serve as the basic layout structure that can be reused across multiple pages.

2. Design the "layout.js" component with a simple structure that includes a header, navigation menu, content area, and a footer. You can use standard HTML and CSS or a CSS framework like Tailwind CSS or styled-components to style the layout (if you want to).

3. Create a landing page in the "app" directory, This page will use the "Layout" component.

4. Implement a "Contact" route in the "app" directory, This page will also use the "Layout" component for consistent layout structure.

5. Customize the header, navigation menu, and footer in the "Layout" component to include links to the "Home" and "Contact" pages.

### Exercise: Implementing Conditional Layouts in Next.js

#### Goal:

Creating conditional layouts in a Next.js application, allowing different pages to have distinct layouts based on specific conditions.

#### Instructions:

2. Create two distinct layout components: "StandardLayout.js" and "AlternateLayout.js." Each layout component should have a different structure, styling, or content.

3. Create a new page or modifiy the exisiting one in the "app" directory named "page.js." This page will serve as the landing page for your application.

4. Implement conditional layout selection for the root "page.js". If a specific condition is met (e.g., a user is logged in), use the "AlternateLayout" component; otherwise, use the "StandardLayout" component.

5. Design the "StandardLayout" and "AlternateLayout" components to make them visually distinct.

### Exercise: Generating Metadata in a Next.js Application

#### Goal:

Generating metadata for pages in a Next.js application. Metadata can be used for SEO (Search Engine Optimization) and to enhance the presentation of content when sharing links on social media.

#### Instructions:

1. In the "app" directory of your project, create a few routes, such as "about.js," and "contact.js."

2. For each page, implement the following:

- Define a unique title for the page. For example, the "page.js" page might have the title "Home," and the "about.js" page might have the title "About Us."
- Create a description for each page, which should be a short summary of the content.
- Specify image URLs for social media sharing (e.g., Open Graph images).

3. Create a custom `generateMetadata` function or module that generates metadata for each page based on the defined title, description, and image URL.

4. On each page, use the `generateMetadata` function to set the appropriate metadata, including the `<title>`, `<meta name="description">`, and Open Graph (OG) tags in the `<head>` section of the HTML.

### Exercise: Fetching Data in the Client-Side of a Next.js Application

#### Goal:

Fetching data on the client side in a Next.js application using client-side rendering techniques.

#### Instructions:

2. Create a new route in the "app" directory, named "clientdatafetch"

3. In the "clientdatafetch" route, use Next.js's `useEffect` and `fetch` (or any preferred data fetching method) to retrieve data from a publicly available API, such as the JSONPlaceholder API (https://jsonplaceholder.typicode.com) or (https://dummyjson.com/products).

4. Display the fetched data on the "clientdatafetch" page. For example, you can display a list of posts, users, or any other relevant data from the API.

5. Ensure that the data fetching and rendering occur on the client side by making the API request in the browser, not during server-side rendering.

### Exercise: Fetching Data on the Server Side in a Next.js Application

#### Goal:

Server-side data fetching in a Next.js application, allowing students to understand the benefits of server-side rendering.

#### Instructions:

1. Create a new route in the "app" directory, named "serverdatafetch"

2. In the "serverdatafetch" page, use either fetch or axios to fetch the data from a publicly available API, such as the JSONPlaceholder API (https://jsonplaceholder.typicode.com).

3. Display the fetched data on the "serverdatafetch" route. For example, you can display a list of posts, users, or any other relevant data from the API.

4. Ensure that the data fetching occurs on the server side and that the page content is fully rendered and delivered to the client with the data when the page is accessed.

### Exercise: Handling Backend Parameters in a Next.js Application

#### Goal:

Handling backend parameters and query strings in a Next.js application, allowing students to understand how to work with dynamic server-side data.

#### Instructions:

1. Create a new route in the "api" directory, named "userdetails"

2. Implement server-side parameter handling in the "userdetails" route using (response.params.somedata). Define a parameter in the URL, such as a user ID, which can be accessed as a route parameter.

3. Fetch user data from a API, using the user ID from the parameter to retrieve specific user information.

4. Log the fetched user data.

### Exercise: Using Middlewares in a Next.js Application

#### Goal:

Middlewares in a Next.js application to enhance and modify requests and responses in a systematic way.

#### Instructions:

1. Create a custom middleware function in the "middleware" file. For example, you can create a middleware that logs information about incoming requests, such as the request method, URL.

2. Implement the middleware function to run on every request made to your Next.js application.
3. Create a new route in the "app" directory, named "About"

4. Implement the "About" page to respond with a simple message like "Hello, welcome to the website!" for all incoming requests.

### Exercise: Working with Environment Variables in a Next.js Application

#### Goal:

Environment variables to manage configuration settings and sensitive data in a Next.js application.

#### Instructions:

1. In your Next.js project, create a `.env.local` file to store your environment variables. This file will be used for local development and should not be committed to version control.

2. Define environment variables in the `.env.local` file for NODE_ENV, If it's in the development mode show this message: "App running in the development mode".

3. Access the environment variables in your Next.js application. For example, you can use `process.env.NODE_ENV` to access the API key.

```
//.env.local file
PORT=5000
MONGO_URL='mongodb://127.0.0.1:27017/demo'
JWT_SECRET=abac12afsdkjladf
NODE_ENV='development'
```

### Exercise: Working with the GET & POST Method in a Next.js Application

#### Goal:

HTTP GET method to retrieve data from a server & POST method in a Next.js application.

#### Instructions:

1. Create a new folder in the "api" directory, named "getdata"

2. Implement the "getdata" page to make an HTTP GET request to a publicly available API of your choice. You can use a popular public API like the JSONPlaceholder API (https://jsonplaceholder.typicode.com) for this exercise.

3. Retrieve data from the API using the GET method. For example, you can retrieve a list of posts or users.

4. Used a postman tool to see all the data coming from that API.