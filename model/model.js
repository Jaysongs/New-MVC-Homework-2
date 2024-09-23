const homePage = `<div class="home">
            <h1>HOME</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iusto ab. Ipsa possimus ratione dicta, assumenda, voluptas sapiente non, alias earum numquam laborum tenetur iusto eos voluptates placeat. Facere, nobis?</p>
            <p>Eius, laudantium fuga autem hic laboriosam doloribus, ea ut quas unde obcaecati temporibus nostrum quos incidunt? Corrupti magnam est minus labore porro accusantium eos ipsum iusto quam, adipisci officiis quo!</p>
            <p>Dicta blanditiis, natus a pariatur expedita iusto repellat magni distinctio assumenda cumque! Quia et, repellendus doloremque enim accusantium cum quos maxime quas eligendi quibusdam laboriosam veniam, nostrum in velit eveniet?</p>
            <p>Minima rem nemo eos labore perspiciatis iste non, ab quaerat, soluta magni impedit placeat inventore facilis eum tenetur praesentium? Quos obcaecati officia vel libero ea nobis totam repellat culpa sed.</p>
            <img src="assets/images/pod.jpg" alt="woody">
        </div>
        <div class="about"></div>
        <div class="product"></div>
        <div class="contact"></div>`;

        const aboutPage =`<div class="about"></div>
            <h1>ABOUT</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iusto ab. Ipsa possimus ratione dicta, assumenda, voluptas sapiente non, alias earum numquam laborum tenetur iusto eos voluptates placeat. Facere, nobis?</p>
            <p>Eius, laudantium fuga autem hic laboriosam doloribus, ea ut quas unde obcaecati temporibus nostrum quos incidunt? Corrupti magnam est minus labore porro accusantium eos ipsum iusto quam, adipisci officiis quo!</p>
            <p>Dicta blanditiis, natus a pariatur expedita iusto repellat magni distinctio assumenda cumque! Quia et, repellendus doloremque enim accusantium cum quos maxime quas eligendi quibusdam laboriosam veniam, nostrum in velit eveniet?</p>
            <p>Minima rem nemo eos labore perspiciatis iste non, ab quaerat, soluta magni impedit placeat inventore facilis eum tenetur praesentium? Quos obcaecati officia vel libero ea nobis totam repellat culpa sed.</p>
            <img src="assets/images/home1.webp" alt="ads">
        </div>`;
        const productsPage =`<div class="products"></div>
            <h1>PRODUCTS</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iusto ab. Ipsa possimus ratione dicta, assumenda, voluptas sapiente non, alias earum numquam laborum tenetur iusto eos voluptates placeat. Facere, nobis?</p>
            <p>Eius, laudantium fuga autem hic laboriosam doloribus, ea ut quas unde obcaecati temporibus nostrum quos incidunt? Corrupti magnam est minus labore porro accusantium eos ipsum iusto quam, adipisci officiis quo!</p>
            <p>Dicta blanditiis, natus a pariatur expedita iusto repellat magni distinctio assumenda cumque! Quia et, repellendus doloremque enim accusantium cum quos maxime quas eligendi quibusdam laboriosam veniam, nostrum in velit eveniet?</p>
            <p>Minima rem nemo eos labore perspiciatis iste non, ab quaerat, soluta magni impedit placeat inventore facilis eum tenetur praesentium? Quos obcaecati officia vel libero ea nobis totam repellat culpa sed.</p>
            <img src="assets/images/sandy eggo.jpg" alt="sandy eggo">`;
        const contactPage =`<div class="contact"></div>
            <h1>CONTACT</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iusto ab. Ipsa possimus ratione dicta, assumenda, voluptas sapiente non, alias earum numquam laborum tenetur iusto eos voluptates placeat. Facere, nobis?</p>
            <p>Eius, laudantium fuga autem hic laboriosam doloribus, ea ut quas unde obcaecati temporibus nostrum quos incidunt? Corrupti magnam est minus labore porro accusantium eos ipsum iusto quam, adipisci officiis quo!</p>
            <p>Dicta blanditiis, natus a pariatur expedita iusto repellat magni distinctio assumenda cumque! Quia et, repellendus doloremque enim accusantium cum quos maxime quas eligendi quibusdam laboriosam veniam, nostrum in velit eveniet?</p>
            <p>Minima rem nemo eos labore perspiciatis iste non, ab quaerat, soluta magni impedit placeat inventore facilis eum tenetur praesentium? Quos obcaecati officia vel libero ea nobis totam repellat culpa sed.</p>
            <img src="assets/images/contact.jpg" alt="US">`;


export const fname = "Jay";
const lname = "Louis";

export function changePage(pageName) {
    let pageVarName = pageName + "Page";
    console.log(pageVarName);
    $("#app").html(eval(pageVarName));

}

export function getName() {
    return lname;
    // return fname;
}

export function getAllNames() {
    let names = ["amy", "bob", "cam", "dan" ]

    // for each loop

    // names.forEach((name) => {
    //     console.log(name);
    // });



    // regular for loop

    // for (let i = 0; i < names.length; i++) {
    //     console.log(names[i]);        
    // }



    // jquery example to loop data

    $.each(names, (idx, name) => {
        console.log(`index ${idx} name: ${name}`);
        $("#app").append(`<p>index ${idx} name: ${name}</p>`);
    });
}