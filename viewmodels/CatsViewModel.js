import { Cat } from '../models/Cat';
import { fetchData } from '../api/api';

export class CatsViewModel {
  async getCats() {
    const catsData = await fetchData('http://10.0.2.2:3000/api/v1/cats');
    return catsData.map(
      (cat) =>
        new Cat(cat._id, cat.cat_name, cat.weight, cat.birthdate, cat.owner)
    );
  }

  async addCat(catData) {
    try {
      const response = await fetch('http://10.0.2.2:3000/api/v1/cats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(catData),
      });
      if (!response.ok) {
        throw new Error('Failed to add cat');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding cat:', error);
    }
  }

  async deleteCat(catId) {
    try {
      const response = await fetch(
        `http://10.0.2.2:3000/api/v1/cats/${catId}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Failed to delete cat');
      }
      return await response.json();
    } catch (error) {
      console.error('Error deleting cat:', error);
    }
  }
  catch(error) {
    console.error('Error adding cat:', error);
  }
}
