import { User } from '../models/User';
import { fetchData } from '../api/api';

export class UsersViewModel {
  async getUsers() {
    const usersData = await fetchData('http://10.0.2.2:3000/api/v1/users');
    return usersData.map(
      (user) => new User(user._id, user.user_name, user.email)
    );
  }

  async addUser(userData) {
    try {
      const response = await fetch('http://10.0.2.2:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  async deleteUser(userId) {
    try {
      const response = await fetch(
        `http://10.0.2.2:3000/api/v1/users/${userId}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      return await response.json();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
}
