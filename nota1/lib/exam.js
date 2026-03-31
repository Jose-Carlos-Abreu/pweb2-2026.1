export class Exam {
    constructor(answer, weight) {
        this.answer = answer;
        this.weight = weight;
        this.exams = [];
    }

    add(exam) {
        let score = 0;
        
        for (let i = 0; i < this.answer.length; i++) {
            if (exam.answer[i] == this.answer[i]) {
                score += this.weight[i];
            }
        }
        
        exam.score = score;
        this.exams.push(exam);
    }

    avg() {
        let sum = 0;

        for (let i = 0; i < this.exams.length; i++) {
            sum += this.exams[i].score;
        }
        
        let media = sum / this.exams.length;
        return media.toFixed(2);
    }

    min(count = 1) {
        let notas = [];

        for (let i = 0; i < this.exams.length; i++) {
            notas.push(this.exams[i].score);
        }

        notas.sort((a, b) => a - b);

        let resultado = notas.slice(0, count);
        return resultado;
    }

    max(count = 1) {
        let notas = [];
        for (let i = 0; i < this.exams.length; i++) {
            notas.push(this.exams[i].score);
        }

        notas.sort((a, b) => b - a);

        let resultado = notas.slice(0, count);
        return resultado;
    }

    lt(limit) {
        let notasFiltradas = [];
        for (let i = 0; i < this.exams.length; i++) {
            let notaAtual = this.exams[i].score;
            
            if (notaAtual < limit) {
                notasFiltradas.push(notaAtual);
            }
        }
        
        return notasFiltradas;
    }

    gt(limit) {
        let notasFiltradas = [];
        
        for (let i = 0; i < this.exams.length; i++) {
            let notaAtual = this.exams[i].score;
            
            if (notaAtual > limit) {
                notasFiltradas.push(notaAtual);
            }
        }
        
        return notasFiltradas;
    }
}