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
