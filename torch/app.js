var torch = document.getElementById('torch');

onmousemove = function(e) {
    torch.style.left = e.clientX - 50 + "px";
    torch.style.top = e.clientY - 50 + "px";
};

