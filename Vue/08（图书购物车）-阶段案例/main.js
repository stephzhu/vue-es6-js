/*
 * @Author: your name
 * @Date: 2021-02-23 10:20:39
 * @LastEditTime: 2021-02-24 22:38:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\Vue\08-阶段案例-（图书购物车）\main.js
 */

const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '海王',
                date: '2020-06',
                price: 222.00,
                court: 1,

            },
            {
                id: 2,
                name: '进击的巨人',
                date: '2020-07',
                price: 22.95,
                court: 1,

            },
        ],
    },
    methods: {
        incream(index) {
            this.books[index].court++;
            // return this.court;

        },
        descream(index) {
            this.books[index].court--;
        },
        removeCar(index) {
            this.books.splice('index', 1);
        }
    },
    computed: {
        totalPrice() {
            let total = 0;
            // for (let i in this.books) {
            //     total += this.books[i].price * this.books[i].court;
            // }
            // return total;

            for (const iterator of this.books) {
                total +=  iterator.price *  iterator.court;
            }
            return total;
        }

    },
    filters: {
        getFilter(price) {
            return '$' + price.toFixed(2);
        }
    }
})
