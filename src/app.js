let bookingList = [

    {
        no : "1",
        hotel : "La Paloma Hotel",
        checkin : "11/02/2022",
        checkout : "16/02/2022",
        cost : 6000
    }, 

    {
        no : "2",
        hotel : "Woodstock Premium",
        checkin : "12/02/2022",
        checkout : "15/02/2022",
        cost : 2800
    },
    
    {
        no : "3",
        hotel : "La Paloma Hotel",
        checkin : "14/02/2022",
        checkout : "16/02/2022",
        cost : 3600
    },

    {
        no : "4",
        hotel : "University Inn",
        checkin : "11/03/2022",
        checkout : "14/03/2022",
        cost : 2300
    },

    {
        no : "5",
        hotel : "University Inn",
        checkin : "1/05/2022",
        checkout : "7/05/2022",
        cost : 7100
    },
 
    {
        no : "6",
        hotel : "Woodstock Premium",
        checkin : "11/02/2022",
        checkout : "15/02/2022",
        cost : 3700
    },
     
    {
        no : "7",
        hotel : "Woodstock Premium",
        checkin : "12/02/2022",
        checkout : "14/02/2022",
        cost : 2000
    },

];

const bookingListElement = document.getElementById("booking-list")

bookingList.forEach(booking => {
    
    bookingListElement.innerHTML += `
        
        <div class="booking-list-item">

            <span>
                ${booking.no}
            </span>
            
            <span>
                ${booking.hotel}
            </span>

            <span>
                ${booking.checkin}
            </span>

            <span>
                ${booking.checkout}
            </span>
            
            <span>
                ${booking.cost}
            </span>

        </div>

    `

});