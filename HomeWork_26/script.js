const initialDate = new Date (prompt('Enter a date to iterate', '2023, 03, 20'));

const dates = {
    from: initialDate,
    to: new Date(),

    [Symbol.iterator]() {
        return {
          current: this.from,
          end: this.to,
          next() {
            if (this.current < this.end) {
              return { value: this.current.setDate(this.current.getDate() +1), done: false };
            }
            return { value: undefined, done: true };
          },
        };
      },
};
for (let date of dates) {
    console.log(`${new Date(date).getDate()-1}/${new Date(date).getMonth()+1}/${new Date(date).getFullYear()}`);
}