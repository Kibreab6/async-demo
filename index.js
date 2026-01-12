// getCustomers(1, (customer)=>{
//     console.log('customer', customer);
//     if (customer.isGold) {
//         getTopiMovies((movies)=>{
//             console.log('Top movies: ', movies);
//             SendEmail(customer.email, movies, () => {
//                 console.log('Email Sent...')
//             });
//         });
//     }
// });
async function displaycustomers() {
    
        const customer = await getCustomer(1);
        console.log('Customer: ', customer);
        if (customer.isGold) {
            const movies = await getTopMovies();
            console.log('Top Movies: ', movies);
            await SendEmail(customer.email, movies);
            console.log('Email sent...');
        }
}

displaycustomers();

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                id: 1, 
                name: 'kibreab tsigabu',
                isGold: true,
                email: 'email'
            });

        }, 4000);
    });
}

function getTopMovies() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['movies1', 'movies2', 'movies3']);
        }, 4000);

    });
}
function SendEmail(email, movies) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, 4000);
        

    });
}
