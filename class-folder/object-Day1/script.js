let profiles = [
    {
        name: "Bhargav",
        age: 21,
        email: "bhargav229@gmail.com",
        contact: 7990580584
    },
    {
        name: "Aarav",
        age: 25,
        email: "aarav123@gmail.com",
        contact: 9123456789
    },
    {
        name: "Riya",
        age: 23,
        email: "riya.kapoor@example.com",
        contact: 9876543210
    },
    {
        name: "Mira",
        age: 29,
        email: "mira.sharma@example.com",
        contact: 8881234567
    },
    {
        name: "Sohan",
        age: 27,
        email: "sohan.verma@example.com",
        contact: 8765432190
    },
    {
        name: "Anika",
        age: 24,
        email: "anika.mehta@example.com",
        contact: 8012345678
    },
    {
        name: "Rajesh",
        age: 30,
        email: "rajesh.p@example.com",
        contact: 7901234567
    },
    {
        name: "Divya",
        age: 22,
        email: "divya.narayan@example.com",
        contact: 7998765432
    },
    {
        name: "Manish",
        age: 28,
        email: "manish.kumar@example.com",
        contact: 7801234567
    },
    {
        name: "Priya",
        age: 26,
        email: "priya.singh@example.com",
        contact: 9112345678
    },
    {
        name: "Kabir",
        age: 21,
        email: "kabir.a@example.com",
        contact: 7896541230
    },
    {
        name: "Alok",
        age: 33,
        email: "alok.t@example.com",
        contact: 8765012345
    },
    {
        name: "Sneha",
        age: 25,
        email: "sneha.jain@example.com",
        contact: 8501234567
    },
    {
        name: "Vikram",
        age: 27,
        email: "vikram.r@example.com",
        contact: 7980123456
    },
    {
        name: "Nisha",
        age: 22,
        email: "nisha.m@example.com",
        contact: 8709876543
    },
    {
        name: "Arjun",
        age: 31,
        email: "arjun.kumar@example.com",
        contact: 9001234567
    },
    {
        name: "Sara",
        age: 24,
        email: "sara.ahmed@example.com",
        contact: 8123456789
    },
    {
        name: "Rohit",
        age: 29,
        email: "rohit.g@example.com",
        contact: 7890123456
    },
    {
        name: "Tara",
        age: 23,
        email: "tara.p@example.com",
        contact: 7789012345
    },
    {
        name: "Karan",
        age: 28,
        email: "karan.d@example.com",
        contact: 7896781234
    },
    {
        name: "Ishita",
        age: 26,
        email: "ishita.r@example.com",
        contact: 7701234567
    },
    {
        name: "Rakesh",
        age: 34,
        email: "rakesh.singh@example.com",
        contact: 8901234567
    },
    {
        name: "Madhavi",
        age: 29,
        email: "madhavi.t@example.com",
        contact: 8112345678
    },
    {
        name: "Kavya",
        age: 25,
        email: "kavya.patel@example.com",
        contact: 7601234567
    },
    {
        name: "Yash",
        age: 27,
        email: "yash.mehta@example.com",
        contact: 8490123456
    },
    {
        name: "Pooja",
        age: 23,
        email: "pooja.v@example.com",
        contact: 8301234567
    },
    {
        name: "Gaurav",
        age: 32,
        email: "gaurav.b@example.com",
        contact: 7909876543
    },
    {
        name: "Ritu",
        age: 28,
        email: "ritu.s@example.com",
        contact: 8901230987
    },
    {
        name: "Ajay",
        age: 31,
        email: "ajay.n@example.com",
        contact: 8509876543
    },
    {
        name: "Simran",
        age: 24,
        email: "simran.j@example.com",
        contact: 8123456780
    }
    
];

let rec = document.getElementById('student');

profiles.forEach((student) => {

    rec.innerHTML +=`  <div class="card" >
      <img src="./student.avif" alt="Profile Image">
      <div class="info">
        <h2>${student.name}</h2>
        <p>Age: ${student.age}</p>
        <p>Contact: ${student.contact}</p>
        <p>Email: ${student.email}</p> 
      </div>    
    </div>  
        `
})

