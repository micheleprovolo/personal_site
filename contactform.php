<?php 

if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $message = $_POST['message'];

    //da controllare per vedere se è corretto
    $to = "michele.provolo@gmail.com";
    $subject = 'Contatto inviato dal form del tuo sito';
    $message = "Message:\n" . $message . "\n\n";

    $errorEmptyFields = false;
    $errorEmail = false;

    if (empty($name) || empty($email) || empty($surname) || empty($message)) {
        echo "<span class='contact-form-error'>Riempi tutti i campi!</span>";
        $errorEmptyFields = true;
    }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<span class='contact-form-error'>Indirizzo mail invalido!</span>";
        $errorEmail = true;
    }
    else { 
        echo "<span class='contact-form-success'>Form compilato correttamente!</span>";      
        //da controllare per vedere se è corretto
        mail($to, $subject, $message);
    }
    
}
else {
    echo "Errore!";
}

?>

<script>
    var errorEmptyFields = "<?php echo $errorEmptyFields ?>";
    var errorEmail = "<?php echo $errorEmail ?>";

    if (errorEmptyFields == true) {
        $("#form-email, #form-name, #form-surname, #form-message").addClass("contact-form-input-error");
    }
    if (errorEmail == true) {
        $("#form-email").addClass("contact-form-input-error");
    }
    // pulisce i campi se l'invio è avvenuto correttamente
    if (errorEmptyFields == false && errorEmail == false) {
        $("#form-email, #form-name, #form-surname, #form-message").val("");
    }
</script>

