import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
          name: 'Admin',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
   
    products: [
        {
            name: 'Dog Walking',
           // _id: '1',
            slug: 'dog-walking', //what you see at URL
            image: '/images/1.jpg',
            category: 'Pets',
            description: 'Dog walking service when you dont habe time for your furry friends',
            price: 10,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            serviceProvider: 'Stefany',
            

        },
        {
            name: 'Grocery Shopping',
           // _id: '2',
            slug: 'grocery-shopping', //what you see at URL
            category: 'Shopping',
            image: '/images/2.jpg',
            price: 20,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'Picking up your groceries anytime',
            serviceProvider: 'Stefany',
        },
        {
            name: 'To-Do-List',
            // _id: '3',
            slug: 'errands', //what you see at URL
            category: 'Errands',
            image: '/images/3.jpg',
            price: 20,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'Have a long to-do list? Let Taskers pick up your dry cleaning, take packages to the post office, pick up prescriptions, or do your shopping',
            serviceProvider: 'Stefany',
        },
        {
            name: 'Courier',
            // _id: '4',
            slug: 'Courier', //what you see at URL
            category: 'Courier',
            image: '/images/4.jpg',
            price: 20,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'Send all you packages safely and quickly',
            serviceProvider: 'Stefany',
        },
        {
            name: 'Home Cleaning',
            // _id: '4',
            slug: 'Cleaner', //what you see at URL
            category: 'Cleaning',
            image: '/images/4.jpg',
            price: 20,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'Clean your home in no time',
            serviceProvider: 'Alex',
        },
    ],

};
export default data;