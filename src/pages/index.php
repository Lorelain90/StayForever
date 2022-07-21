<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="class.css">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="info.php" enctype="multipart/form-data">

        <input type="file" name="imagen">
        <input type="text" name="nombre" placeholder="nombre" required>
        <input type="text" name="precio" placeholder="precio" required>
        <input type="text" name="m2" placeholder="metros cuadrados" required>

        <p>¿Tiene Ascensor?</p>
        <input type="radio" name="ascensor" value="no">No
        <input type="radio" name="ascensor" value="si">Si

        <p>¿Tiene Graje?</p>
        <input type="radio" name="garaje" value="no">No
        <input type="radio" name="garaje" value="si">Si

        <textarea name="descripcion" placeholder="Agrega una breve descipcion" required></textarea>
        <input type="submit">
    </form>

    <?php
    require('conexion.php');
    $selector = "SELECT * FROM informacion";
    $ejecutar = mysqli_query($conn, $selector) or die (mysqli_error($conn));

    while ($informacion = mysqli_fetch_array($ejecutar)){
    ?>
    <table>
        <tr>
            <td><?php echo $informacion['nombre']?></td>
            <td><img class="imagen" src="<?php echo substr($informacion['imagen'], 2) ?>"></td>
            <td><?php echo $informacion['precio']?></td>
            <td><?php echo $informacion['m2']?></td>
            <td><?php echo $informacion['ascensor']?></td>
            <td><?php echo $informacion['garaje']?></td>
            <td><?php echo $informacion['descripcion']?></td>
            
        </tr>
    </table>
    <?php
     }
    ?>
</body>

</html>