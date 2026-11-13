// API reference cards: a list of methods on the left, details of the selected method on the right.
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".api-card").forEach(function (card) {
        var items = Array.prototype.slice.call(card.querySelectorAll(".api-item"));
        var panes = card.querySelectorAll(".api-pane");
        var show = function (index, focus) {
            items.forEach(function (item, i) {
                item.classList.toggle("active", i === index);
                item.setAttribute("aria-selected", i === index ? "true" : "false");
                item.tabIndex = i === index ? 0 : -1;
            });
            panes.forEach(function (pane, i) { pane.classList.toggle("active", i === index); });
            if (focus) items[index].focus();
        };
        items.forEach(function (item, i) {
            item.addEventListener("click", function () { show(i, false); });
            item.addEventListener("keydown", function (e) {
                if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); show((i + 1) % items.length, true); }
                if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); show((i - 1 + items.length) % items.length, true); }
            });
        });
        show(0, false);
    });
});
