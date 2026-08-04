const form = document.getElementById("bookingForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const promo = document.getElementById("promo").value;

    const response = await fetch("ВСТАВИ_СЮДА_ССЫЛКУ_WORKERS", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            phone,
            date,
            promo
        })
    });

    if (response.ok) {
        document.body.innerHTML = `
        <div style="font-family:Arial;padding:40px;text-align:center;">
            <h1>Спасибо!</h1>
            <p>Ваша заявка успешно отправлена.</p>

            <a href="https://t.me/bboomboxi"
            style="display:block;
            margin:20px auto;
            width:260px;
            background:#0088cc;
            color:white;
            padding:15px;
            text-decoration:none;
            border-radius:12px;
            font-size:20px;">
            Telegram
            </a>

            <a href="https://wa.me/79211048088"
            style="display:block;
            margin:15px auto;
            width:260px;
            background:#25D366;
            color:white;
            padding:15px;
            text-decoration:none;
            border-radius:12px;
            font-size:20px;">
            WhatsApp
            </a>
        </div>`;
    } else {
        alert("Ошибка отправки.");
    }
});
