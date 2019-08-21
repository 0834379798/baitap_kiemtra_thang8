function kiemtra() {
    var data = document.getElementById("data").value;
    let list = ["one", "two", "three"];
    for (var i = 0; i < list.length; i++) {
        {
            if (list[i] == data) {
                alert("ton tai");
                return;
            } else {
                alert("khong ton tai");
                return;
            }
        }


    }
}

function kiemtra1() {
    let list = ["one", "two", "three"];
    var data = document.getElementById("data").value;
    let check = list.filter((a) => { return a === data })
    console.log(check);
    if (check.length > 0) {
        alert('ton tai');
    } else {
        alert("khong ton tai");
    }

}
let list = ["one", "two", "three"];

function check1(a1) {
    return a1 == 'one';
}



function kiemtra2() {
    var data = document.getElementById("data").value;
    let result = list.find(item => item === data);
    console.log(result)
    if (result) {
        alert("ton tai")
    } else {
        alert("ko");
    }
}


function kiemtra3() {
    var data = document.getElementById("data").value;
    let result = list.some(item => item === data);
    console.log(result);
    if (result) {
        alert("ton tai")
    } else {
        alert("ko");
    }

}

function kiemtra4() {
    var data = document.getElementById("data").value;
    let result = list.findIndex(item => item === data);
    console.log(result);
    if (result === -1) {
        alert("ko ton tai");

    } else {
        alert("co ton tai");
    }

}

function kiemtra5() {
    var data = document.getElementById("data").value;
    let result = list.includes(data);
    console.log(result);
    if (result) {
        alert("ton tai")
    } else {
        alert("ko");
    }

}
/*t mục đích của các hàm, kiểu trả về của các hàm sau:
filter(), map(), find(), findIndex(), indexOf(), some(), every(), includes(), 
Cho ví dụ từng hàm */

/* filter() hàm lọc'có giá trị nhập thì trả về giá trị đó ngược lại ko có thì là rỗng
lọc từng phần tử trong mảng xem có thỏa điều kiện hay không.
trả về giá trị or rỗng */
let students = [{
        name: "Tran Van A",
        age: 21,
        university: "Information Technology"
    },
    {
        name: "Tran Van B",
        age: 9,
        university: "Artist"
    },
];


let x = students.filter(item => item.university == "Artist");
console.log(x);

/* lọc ra học sinh nào học đại học Artist */
/* 
Map() gọi hàm để thực hiện một phương thức nào đó trong mảng theo thứ tự 
ví dụ như gọi hàm lấy giá trị tuyệt đối của từng phần tử trong number, trả về kết quả */
let numbers = [4, -9, 16, -25];
let y = numbers.map(Math.abs);
console.log(y);
/*
find()  hàm được dùng để tìm kiếm, chỉ dùng cho tìm 1 thuộc tính , trả về giá trị càn tìm , ko có thì là undefined*/
let products = [{
        name: "Iphone6",
        country: "US",
        company: "A&B"
    },
    {
        name: "Iphone8",
        country: "China",
        company: "Bejing"
    },
    {
        name: "IphoneX",
        country: "Japan",
        company: "Bejing"
    },
];

let a = products.filter(product => product.country == "China");
console.log(a);

/* findIndex() được dùng để trả về vị tris phần tử trong mảng trả về có vị trí đó tồn tại hoặc -1(ko tồn tại) */

let airplanes = [{
        id: 111,
        name: "Boing777",
        country: "US",
        company: "VietnamAirline"
    },
    {
        id: 222,
        name: "Boing377",
        country: "US",
        company: "Vietjectss"
    },
    {
        id: 333,
        name: "FordJavanIX",
        country: "Japan",
        company: "Vietject"
    },
];

let viet = airplanes.findIndex(airplane => airplane.company == "Vietject");
console.log(viet);








/* , some(), kiem tra xem co ton tai it nhat 1 phan tu trong mang hay k , tra ve true false */
let pls = [2, 4, 6, 8, 9, 10, 12];

function isOdd(i) {
    return i % 5 == 0;
}
let k = pls.some(isOdd);
console.log(k);


/* indexOf(), every(), includes(), */

let airplanes1 = [{
        id: 111,
        name: "Boing777",
        country: "US",
        company: "VietnamAirline"
    },
    {
        id: 222,
        name: "Boing377",
        country: "US",
        company: "Vietjectss"
    },
    {
        id: 333,
        name: "FordJavanIX",
        country: "Japan",
        company: "Vietject"
    },
];
/* indexOf() gia tri cua 1 phan tu nao do, xem dung vi tri nao trong mang, tra ve vi tri dau tien tim thay ko tim dc -1 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var b = fruits.indexOf("Apple");
console.log(b);

/*every() kiem tra xem tat ca cac phan tu trong mang co thoa man dieu kien hay la k, */

let Freshers = [{
        id: 1,
        name: "Thong",
        country: "VN",
        skils: "CSS",
        exp: 2
    },
    {
        id: 2,
        name: "Tan",
        country: "VN",
        skills: "CSS",
        exp: 3
    },
    {
        id: 3,
        name: "Truong",
        country: "VN",
        skills: "CSS",
        exp: 2
    },
];

function resources(e) {
    return (e.exp >= 2)
}
let NV = Freshers.every(resources);
console.log(NV);

/* includes(), KIEM TRA XEM PHAN TU A CO LA CON CUA PHAN TU B hay k, TRUE FALSE*/
var colors = ["RED", "YELLOW", "BLACK", "WHITE"];
var n = fruits.includes("WHITE");