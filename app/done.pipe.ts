// import {Pipe, PipeTransform} from 'angular2/core';
// import {Keg} from './keg.model';
//
// @Pipe({
//   name: "done",
//   pure: false
// })
// export class DonePipe implements PipeTransform {
//   transform(input: Keg[], args) {
//     console.log('selected keg: ', args[1])
//     var desiredDoneState = args[0];
//     if(desiredDoneState === "done") {
//       return input.filter((keg) => {
//         return keg.done;
//       });
//     } else if (desiredDoneState === "notDone") {
//       return input.filter((keg) => {
//         return !keg.done;
//       });
//     } else {
//       return input;
//     }
//   }
// }
