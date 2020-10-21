import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import { PostsMock } from '../_mocks/posts';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockAuthService {
  authenticated = false;

  getPosts(date) {
    return PostsMock.postsMock;
  }
}

describe('PostService', () => {
  let service: PostService;
  let spy: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
