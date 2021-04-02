import { Unsubscribe } from '@material-ui/icons';
import firebase from '../firebase'




const ref = firebase.firestore(); // database reference

const list_songs = (queue) => {

	// queue.map( ({ docID, songID, name, artist, image, priority}) =>

	//           return ()

	// )


} // end of list_songs function

// docID: doc.id,
// songID: doc.data().id,
// name: doc.data().name,
// artist: doc.data().artist,
// image: doc.data().image,
// priority: doc.data().priority,


export const db_get_room = (room) => { // takes the rooms collection

	// console.log(room)

	let queue = []

	const roomRef = ref.collection('rooms').doc(room);

	// const queueRef = roomRef.collection('queue')

	let unsubscribe = roomRef.collection('queue')
		.onSnapshot(querySnapshot => {

			const items = querySnapshot.docs.map(doc => queue.push({
				docID: doc.id,
				songID: doc.data().id,
				name: doc.data().name,
				artist: doc.data().artist,
				image: doc.data().image,
				priority: doc.data().priority,
			}))

			console.log(queue)
		})

	console.log(queue)
	return queue

}