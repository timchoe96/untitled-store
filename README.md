# About

This is a fully responsive E-commerce mock-up for my blog store. All items are not real products and are just placeholders. 

# Technologies

The technologies used to build this website include:

- HTML5
- CSS3
- SASS
- REACT
- REACT - ROUTER - DOM
- REDUX

# More info

This website includes 4 main pages:

1. Home
2. Store
3. Login
4. Cart

### Home

The homepage features a repeating video ad that shows the brand logo. It also includes new arrivals to the store. 

### Store

The store page has 4 subcategories:Tops, Bottoms, Accessories, and Home goods. All the products are dynamically rendered through the [Contentful](https://www.contentful.com) API. Some products have size categories that must be chosen before adding to the cart. 

### Login

Use the sample credentials below to test out the login feature or make your own account.

username: test@gmail.com
password: test123

The store includes an authentication page which allows users to create accounts and have items saved to the cart, even after logging out and refreshing the page. 
Authentication is handled through  [Google Firebase](https://firebase.google.com/docs/auth)

### Cart

The cart section shows which items you have selected for checkout. It shows the subtotal cost of all your items and allows for the removal of items. When logged in, the cart items are saved and rendered from [Google Firebase](https://firebase.google.com/docs/firestore) Cloud Firestore, which is a backend service provided by Google. 

# Website Images

Homepage:

![](images/Home.png)

Blog: 

![](images/blog.png)

Images: 

![](images/images.png)

