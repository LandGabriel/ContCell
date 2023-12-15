document.addEventListener('DOMContentLoaded', function () {
    const cellCounts = {
        4: { name: 'Neutrófilo', count: 0 },
        5: { name: 'Linfócito', count: 0 },
        6: { name: 'Monócito', count: 0 },
        1: { name: 'Eosinófilo', count: 0 },
        3: { name: 'Basófilo', count: 0 },
        2: { name: 'Outras', count: 0 },
        0: { name: 'NRBC', count: 0 }
    };

    let totalClicks = 0;
    let isCountingEnabled = true;

    document.addEventListener('keydown', function (event) {
        const key = parseInt(event.key);

        if (isCountingEnabled && totalClicks < 100 && cellCounts[key]) {
            cellCounts[key].count += 1;

            // Se não for NRBC, incrementa o total
            if (key !== 0) {
                totalClicks += 1;
            }

            updateDisplay();

            if (totalClicks === 100) {
                disableClicks();
                showCompletionMessage();
            }
        }
    });

    function updateDisplay() {
        const display = document.getElementById('clickDisplay');
        display.innerText = totalClicks;

        // Atualiza a contagem individual de cada célula
        for (const key in cellCounts) {
            const cellCountElement = document.getElementById(`count-${key}`);
            cellCountElement.innerText = cellCounts[key].count;
        }
    }

    function disableClicks() {
        // Desativa futuros cliques
        isCountingEnabled = false;
    }

    function showCompletionMessage() {
        const completionMessage = document.getElementById('completionMessage');
        completionMessage.innerText = '100 células hematológicas foram contadas!';
    }
});
