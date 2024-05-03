const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.map(line => line.split(','));

      const countByField = {};
      students.forEach(student => {
        const field = student[3];
        if (!countByField[field]) {
          countByField[field] = [];
        }
        countByField[field].push(student[0]);
      });

      const totalCount = students.length;
      console.log(`Number of students: ${totalCount}`);

      for (const field in countByField) {
        console.log(`Number of students in ${field}: ${countByField[field].length}. List: ${countByField[field].join(', ')}`);
      }

      resolve();
    });
  });
}
module.exports = countStudents;
