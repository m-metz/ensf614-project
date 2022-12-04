package com.ensf614project.movietheatre;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.ensf614project.movietheatre.entities.CancellationCredit;
import com.ensf614project.movietheatre.entities.Card;
import com.ensf614project.movietheatre.entities.Movie;
import com.ensf614project.movietheatre.entities.RegisteredUser;
import com.ensf614project.movietheatre.entities.Screen;
import com.ensf614project.movietheatre.entities.Showtime;
import com.ensf614project.movietheatre.entities.Theatre;
import com.ensf614project.movietheatre.entities.Ticket;
import com.ensf614project.movietheatre.entities.Transaction;
import com.ensf614project.movietheatre.repositories.CancellationCreditRepository;
import com.ensf614project.movietheatre.repositories.CardRepository;
import com.ensf614project.movietheatre.repositories.MovieRepository;
import com.ensf614project.movietheatre.repositories.RegisteredUserRepository;
import com.ensf614project.movietheatre.repositories.ScreenRepository;
import com.ensf614project.movietheatre.repositories.ShowtimeRepository;
import com.ensf614project.movietheatre.repositories.TheatreRepository;
import com.ensf614project.movietheatre.repositories.TicketRepository;
import com.ensf614project.movietheatre.repositories.TransactionRepository;

@SpringBootApplication
public class MovieTheatreApplication {
	public static void main(String[] args) {
		SpringApplication.run(MovieTheatreApplication.class, args);
	}

	// public WebMvcConfigurer corsConfigurer() {
	// return new WebMvcConfigurer() {
	// @Override
	// public void addCorsMappings(CorsRegistry registry) {
	// registry.addMapping("/**").allowedOrigins("*").allowedMethods("*");
	// }
	// };
	// }

	// @Bean
	public CommandLineRunner demo(MovieRepository movieRepository, TheatreRepository theatreRepository,
			ScreenRepository screenRepository, ShowtimeRepository showtimeRepository,
			TicketRepository ticketRepository, TransactionRepository transactionRepository,
			RegisteredUserRepository registeredUserRepository, CardRepository cardRepository,
			CancellationCreditRepository cancellationCreditRepository) {
		return (args) -> {
			// save movies
			movieRepository.save(new Movie("Black Panther: Wakanda Forever", LocalDate.of(2022, 11, 11), "Ryan Coogler",
					true, true, "Action", "blackpantherwakandaforever_lob_crd_05.jpg"));
			movieRepository.save(new Movie("Spider-Man: Homecoming",
					LocalDate.of(2017, 6, 28), "Jon Watts",
					true, true, "Adventure", "spider-manhomecoming_lob_crd_01_4.jpg"));
			movieRepository.save(new Movie("The Matrix",
					LocalDate.of(1999, 3, 31), "Lana Wachowski, Lilly Wachowski",
					true, false, "Action", "Matrix_2000x3000.jpg"));
			movieRepository.save(new Movie("Avatar: The Way of Water",
					LocalDate.of(2022, 12, 16), "James Cameron",
					false, true, "Adventure", "Avatar-the-way-of-water-official poster.jpg"));

			// save theaters
			Theatre firstTheater = new Theatre("Scotiabank Theatre Chinook",
					"6455 Macleod Trail SW, Calgary, AB T2H 0K4");
			Theatre secondTheater = new Theatre("Cineplex Cinemas Seton and VIP",
					"19683 Seton Crescent SE, Calgary, AB T3M 2N9");
			theatreRepository.save(firstTheater);
			theatreRepository.save(secondTheater);

			// save screens
			screenRepository.save(new Screen(firstTheater, 1));
			screenRepository.save(new Screen(firstTheater, 2));
			screenRepository.save(new Screen(secondTheater, 1));

			// save showtimes
			LocalDate date;
			double price = 9.99;
			long transactionNumber = 423104921;
			int randomEmail = 1;
			String tempEmail = "fake.email@gmail.com";

			// for movies with id 1-4
			for (Long i = 1L; i <= 4L; i++) {

				// for 3 consecutive days
				for (int j = 0; j < 3; j++) {
					if (i != 3) {
						date = LocalDate.of(2022, 12, 14 + j);
					} else {
						date = LocalDate.of(2001, 8, 3 + j);
					}
					// for hours 19 - 23
					for (int hour = 19; hour <= 23; hour++) {
						Showtime firstShowtime = new Showtime(movieRepository.getReferenceById(i),
								date,
								LocalTime.of(hour, 0), screenRepository.getReferenceById(1L));
						Showtime secondShowtime = new Showtime(movieRepository.getReferenceById(i),
								date,
								LocalTime.of(hour, 30), screenRepository.getReferenceById(2L));
						Showtime thirdShowtime = new Showtime(movieRepository.getReferenceById(i),
								date,
								LocalTime.of(hour, 30), screenRepository.getReferenceById(3L));

						// save showtimes
						showtimeRepository.save(firstShowtime);
						showtimeRepository.save(secondShowtime);
						showtimeRepository.save(thirdShowtime);

						// add tickets to showtimes
						for (int rowNumber = 3; rowNumber <= 5; rowNumber = rowNumber + 2) {
							for (int seatNumber = 4; seatNumber <= 6; seatNumber++) {
								if (randomEmail > 5) {
									tempEmail = "fake.email" + Integer.toString(randomEmail++) + "@gmail.com";
								}

								// add transactions
								Transaction first = new Transaction(transactionNumber++,
										date.minusDays(5).atTime(20, 23),
										tempEmail, price);

								Transaction second = new Transaction(transactionNumber++,
										date.minusDays(5).atTime(20, 23),
										"fake.email" + Integer.toString(randomEmail++) + "@gmail.com", price);

								Transaction third = new Transaction(transactionNumber++,
										date.minusDays(5).atTime(20, 23),
										"fake.email" + Integer.toString(randomEmail++) + "@gmail.com", price);

								transactionRepository.save(first);
								transactionRepository.save(second);
								transactionRepository.save(third);

								// add tickets
								ticketRepository
										.save(new Ticket(price, firstShowtime, false, seatNumber, rowNumber, first));
								ticketRepository
										.save(new Ticket(price, secondShowtime, false, seatNumber, rowNumber, second));
								ticketRepository
										.save(new Ticket(price, thirdShowtime, false, seatNumber, rowNumber, third));
							}

						}

					}

				}
			}

			// add few registered users
			RegisteredUser user = new RegisteredUser("fake.email@gmail.com", "Fake User",
					"Nice Address, Calgary, AB, Canada", "admin");

			registeredUserRepository.save(user);
			registeredUserRepository.save(new RegisteredUser("John.Smith@gmail.com", "John Smith",
					"Nice Address, Calgary, AB, Canada", "admin"));

			// add card to user
			cardRepository.save(new Card("1234123412341234", 123, "Fake User", LocalDate.of(2023, 12, 1),
					"D6KB9F", "Credit", user));

			// add cancellation credit to user
			cancellationCreditRepository.save(new CancellationCredit(LocalDate.of(2023, 2, 3), price, "code1", user));
			cancellationCreditRepository.save(new CancellationCredit(LocalDate.of(2023, 4, 13), price, "code2", user));

			for (int i = 3; i <= 10; i++) {
				cancellationCreditRepository.save(new CancellationCredit(LocalDate.of(2023, 7, 13),
						BigDecimal.valueOf(price * 0.85).setScale(2, RoundingMode.HALF_DOWN).doubleValue(),
						"code" + Integer.toString(i), null));
			}
		};
	}
}
