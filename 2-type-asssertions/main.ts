
let message:string ;
message = 'abc';

//os 2 jeitos de declarar estão corretas
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');