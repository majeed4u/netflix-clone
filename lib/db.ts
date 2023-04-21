// const connection = {} as { isConnected?: boolean | number };

// export async function connect() {
//   // connect to database
//   if (connection.isConnected) {
//     console.log('Already connected to database');
//     return;
//   }
//   if (mongoose.connection.length > 0) {
//     connection.isConnected = mongoose.connections[0].readyState;
//     if (connection.isConnected === 1) {
//       console.log('Use existing connection');
//       return;
//     }
//     await mongoose.disconnect();
//   }
//   const db = await mongoose.connect(process.env.MONGODB_URI);
//   console.log('New connection');
//   connection.isConnected = db.connections[0].readyState;
}
