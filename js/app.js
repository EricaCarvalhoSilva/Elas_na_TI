import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

class Depoimento {

    constructor(
        nome,
        linkedin,
        futuroTI,
        novaGeracao,
        desafiosMulheres
    ) {

        this.nome = nome;
        this.linkedin = linkedin;
        this.futuroTI = futuroTI;
        this.novaGeracao = novaGeracao;
        this.desafiosMulheres = desafiosMulheres;
    }
}

const form =
    document.getElementById("formDepoimento");

if (form) {

    form.addEventListener("submit", async function(event) {

        event.preventDefault();

        const nome =
            document.getElementById("nome").value || "Anônimo";

        const linkedin =
            document.getElementById("linkedin").value;

        const futuroTI =
            document.getElementById("futuroTI").value;

        const novaGeracao =
            document.getElementById("novaGeracao").value;

        const desafiosMulheres =
            document.getElementById("desafiosMulheres").value;

        const novoDepoimento =
            new Depoimento(
                nome,
                linkedin,
                futuroTI,
                novaGeracao,
                desafiosMulheres
            );

        try {

            await addDoc(
                collection(db, "depoimentos"),
                {
                    ...novoDepoimento,
                    criadoEm: new Date()
                }
            );

            alert(
                "Depoimento enviado com sucesso!"
            );

            form.reset();

        } catch (erro) {

            console.error(erro);

            alert(
                "Erro ao enviar depoimento."
            );

        }

    });

}

async function mostrarDepoimentos() {

    const lista =
        document.getElementById(
            "listaDepoimentos"
        );

    if (!lista) return;

    lista.innerHTML = "";

    const querySnapshot =
        await getDocs(
            collection(db, "depoimentos")
        );

    querySnapshot.forEach(doc => {

        const item = doc.data();

        lista.innerHTML += `

        <div class="card depoimento-card">

            <h3>${item.nome}</h3>

            ${
                item.linkedin
                ?
                `
                <p>
                    🔗
                    <a href="${item.linkedin}" target="_blank">
                        LinkedIn
                    </a>
                </p>
                `
                :
                ""
            }

            <h4>
                O que você espera do mercado de TI para o futuro?
            </h4>

            <p>
                ${item.futuroTI}
            </p>

            <h4>
                O que a nova geração pode fazer para transformar esse cenário?
            </h4>

            <p>
                ${item.novaGeracao}
            </p>

            <h4>
                Quais fatores ainda contribuem para a baixa presença de mulheres na área?
            </h4>

            <p>
                ${item.desafiosMulheres}
            </p>

        </div>

        `;
    });

}

mostrarDepoimentos();