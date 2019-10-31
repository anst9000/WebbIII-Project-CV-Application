<?php
    include 'res/includes/header.php';
?>

<?php
    include 'res/includes/navigation.php';
?>

<!--====================================================================-->
<!--Content that changes from page to page-->
<!--====================================================================-->
    <!-- SHOWCASE -->
    <section id="showcase">
	<div class="showcase-container">
	    <div class="showcase-row"></div>
	    <div class="showcase-row">
		<div class="showcase-content">
		<?php echo utf8_encode('
		    <h2><span class="primary-text">Acke </span>Strömberg</h2>
		    <p>En webbplats om mig</p>
		'); ?>
		</div>
	    </div>
	    <div class="showcase-row"></div>
	</div>
    </section>



    <!-- FEATURES -->
    <section id="features">
	<div class="container">

	    <div class="features-header">
	    <?php echo utf8_encode('
		<h2>Fakta om mig</h2>
		<p>Vem är jag</p>
	    '); ?>
	    </div>
	    
	    <div class="icon-group">

		<!-- ICON ROW 1 -->
		    <div class="icon">
			<i class="fas fa-birthday-cake"><!-- --></i><br>
			<?php echo utf8_encode('
			    <h4>Är född</h4>
			    <p>30 augusti 1969</p>
			'); ?>
		    </div>

		    <div class="icon">
			<i class="fas fa-female"><!-- --></i><br>
			<?php echo utf8_encode('
			    <h4>Min fru</h4>
			    <p>Andrea Strömberg</p>
			'); ?>
		    </div>

		    <div class="icon">
			<i class="fas fa-child"><!-- --></i><br>		    
			<?php echo utf8_encode('
			    <h4>Har barn</h4>
			    <p>Tobias 13 år</p>
			'); ?>
		    </div>


		<!-- ICON ROW 2 -->
		    <div class="icon">
			<i class="fas fa-carrot"><!-- --></i><br>
			<?php echo utf8_encode('
			    <h4>Husdjur</h4>
			    <p>En kanin</p>
			'); ?>
		    </div>

		    <div class="icon">
			<i class="fas fa-running"><!-- --></i><br>
			<?php echo utf8_encode('
			    <h4>Intressen</h4>
			    <p>Skogen och bridge</p>
			'); ?>
		    </div>

		    <div class="icon">
			<i class="fas fa-laptop-code"><!-- --></i><br>
			<?php echo utf8_encode('
			    <h4>Kodar</h4>
			    <p>JS, React, Vue, Java, C++, Python</p>
			'); ?>
		    </div>
		
	    </div>
	</div>
    </section>


    <!-- INFO SECTION -->
    <section id="info">
	<div class="info-image">
	    <img src="img/acke.jpg" alt="acke stromberg" id="section-img">
	</div>

        <div class="info-list">
	    <h2>Egenskaper</h2>
	    <ul>
	    <?php echo utf8_encode('
		<li><i class="fas fa-check"><!-- --></i> Öppen</li>
		<li><i class="fas fa-check"><!-- --></i> Nyfiken</li>
		<li><i class="fas fa-check"><!-- --></i> Programmerare</li>
		<li><i class="fas fa-check"><!-- --></i> Familjekär</li>
		<li><i class="fas fa-check"><!-- --></i> Klurare</li>
		<li><i class="fas fa-check"><!-- --></i> Glad</li>
	    ')?>
	    </ul>
	</div>
    </section>
<!--====================================================================-->
<!--====================================================================-->

    <script src="js/index.js"></script>
  
<?php include 'res/includes/footer.php'; ?>