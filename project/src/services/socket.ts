import { addNewsItem, updateNewsItem } from '../features/news/newsSlice';
import { AppDispatch } from '../store';
import { generateRandomNewsItem } from '../utils/mockData';

// This is a mock implementation of socket.io-client
// In a real application, you would use actual WebSocket connection
export class MockSocket {
  private dispatch: AppDispatch;
  private interval: number | null = null;
  private connected = false;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }

  connect() {
    if (this.connected) return;
    
    this.connected = true;
    console.log('Mock WebSocket connected');
    
    // Simulate receiving new news items periodically
    this.interval = setInterval(() => {
      const randomAction = Math.random();
      
      if (randomAction < 0.7) {
        // 70% chance to add a new news item
        const newItem = generateRandomNewsItem();
        this.dispatch(addNewsItem(newItem));
        console.log('New news item received:', newItem.title);
      } else {
        // 30% chance to update an existing item (likes, comments, etc.)
        const updatedItem = generateRandomNewsItem();
        this.dispatch(updateNewsItem(updatedItem));
        console.log('News item updated:', updatedItem.title);
      }
    }, 20000); // Every 20 seconds
  }

  disconnect() {
    if (!this.connected) return;
    
    this.connected = false;
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
    console.log('Mock WebSocket disconnected');
  }

  isConnected() {
    return this.connected;
  }
}

// Singleton instance
let socketInstance: MockSocket | null = null;

export const getSocket = (dispatch: AppDispatch): MockSocket => {
  if (!socketInstance) {
    socketInstance = new MockSocket(dispatch);
  }
  return socketInstance;
};