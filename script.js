let currentShape = 0;

function openModal(type) {
  currentShape = type;
  document.getElementById("modal").style.display = "flex";

  let form = "";
  let judul = "";

  if (type === 1) {
    judul = "Balok + Limas";
    form = `
            <div class="form-group">
                <label>Panjang (m)</label>
                <input id="p" type="number">
            </div>

            <div class="form-group">
                <label>Lebar (m)</label>
                <input id="l" type="number">
            </div>

            <div class="form-group">
                <label>Tinggi Balok (m)</label>
                <input id="t1" type="number">
            </div>

            <div class="form-group">
                <label>Tinggi Limas (m)</label>
                <input id="t2" type="number">
            </div>
            `;
  }

  if (type === 2) {
    judul = "Tabung + Kerucut";
    form = `
            <div class="form-group">
                <label>Jari-jari (m)</label>
                <input id="r" type="number">
            </div>

            <div class="form-group">
                <label>Tinggi Tabung (m)</label>
                <input id="t1" type="number">
            </div>

            <div class="form-group">
                <label>Tinggi Kerucut (m)</label>
                <input id="t2" type="number">
            </div>
            `;
  }

  if (type === 3) {
    judul = "Prisma";
    form = `
            <div class="form-group">
                <label>Luas Alas (m²)</label>
                <input id="luas" type="number">
            </div>

            <div class="form-group">
                <label>Tinggi (m)</label>
                <input id="t" type="number">
            </div>
            `;
  }

  document.getElementById("judul").innerText = judul;
  document.getElementById("form").innerHTML = form;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("hasil").innerText = "Hasil: -";
}

function hitung() {
  let hasil = 0;

  if (currentShape === 1) {
    let p = +document.getElementById("p").value;
    let l = +document.getElementById("l").value;
    let t1 = +document.getElementById("t1").value;
    let t2 = +document.getElementById("t2").value;

    hasil = p * l * t1 + (1 / 3) * p * l * t2;
  }

  if (currentShape === 2) {
    let r = +document.getElementById("r").value;
    let t1 = +document.getElementById("t1").value;
    let t2 = +document.getElementById("t2").value;

    hasil = Math.PI * r * r * t1 + (1 / 3) * Math.PI * r * r * t2;
  }

  if (currentShape === 3) {
    let luas = +document.getElementById("luas").value;
    let t = +document.getElementById("t").value;

    hasil = luas * t;
  }

  document.getElementById("hasil").innerText =
    "Hasil: " + hasil.toFixed(2) + " m³";
}

/* close klik luar */
window.onclick = function (e) {
  if (e.target.id === "modal") {
    closeModal();
  }
};
