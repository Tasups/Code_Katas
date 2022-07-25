

const REGEXP =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*\W)(?!.*_)(?!.* ).{6,}$/;

/*

You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long = at the end{6,}
contains a lowercase letter = (?=.*[a-z])
contains an uppercase letter = (?=.*[A-Z])
contains a digit = (?=.*[0-9])
only contains alphanumeric characters (note that '_' is not alphanumeric) = (?!.*\W) and (?!.*_) and (?!.* )

*/